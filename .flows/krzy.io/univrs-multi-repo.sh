#!/bin/bash
# univrs-multi-repo.sh - Multi-repository management script

set -euo pipefail

# Configuration
REPOS=(
    "krzy"
    "univrs-dol" 
    "univrs-vudo"
    "univrs-enr"
    "cryptosaint.io"
    "learn.univrs.io"
    "vudo.univrs.io"
)

REPOS_DIR="$HOME/repos"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if repository exists
repo_exists() {
    local repo=$1
    [[ -d "$REPOS_DIR/$repo/.git" ]]
}

# Show recent commits across all repos
show_recent_activity() {
    local days=${1:-7}
    
    log_info "Recent activity (last $days days):"
    echo
    
    for repo in "${REPOS[@]}"; do
        if repo_exists "$repo"; then
            echo -e "${BLUE}=== $repo ===${NC}"
            git -C "$REPOS_DIR/$repo" log --oneline --since="$days days ago" --color=always || log_warning "No recent commits in $repo"
            echo
        else
            log_warning "Repository $repo not found"
        fi
    done
}

# Show status across all repos
show_status() {
    log_info "Status across all repositories:"
    echo
    
    for repo in "${REPOS[@]}"; do
        if repo_exists "$repo"; then
            echo -e "${BLUE}=== $repo ===${NC}"
            cd "$REPOS_DIR/$repo"
            
            # Check for uncommitted changes
            if ! git diff-index --quiet HEAD --; then
                log_warning "Uncommitted changes detected"
                git status --porcelain
            else
                log_success "Clean working directory"
            fi
            
            # Check if ahead/behind remote
            if git rev-parse --verify --quiet @{upstream} >/dev/null; then
                local_sha=$(git rev-parse @)
                remote_sha=$(git rev-parse @{upstream})
                base_sha=$(git merge-base @ @{upstream})
                
                if [[ "$local_sha" == "$remote_sha" ]]; then
                    log_success "Up to date with remote"
                elif [[ "$local_sha" == "$base_sha" ]]; then
                    log_warning "Behind remote"
                elif [[ "$remote_sha" == "$base_sha" ]]; then
                    log_warning "Ahead of remote"
                else
                    log_warning "Diverged from remote"
                fi
            fi
            echo
        fi
    done
}

# Pull latest changes
pull_all() {
    log_info "Pulling latest changes for all repositories:"
    echo
    
    for repo in "${REPOS[@]}"; do
        if repo_exists "$repo"; then
            echo -e "${BLUE}=== Pulling $repo ===${NC}"
            if git -C "$REPOS_DIR/$repo" pull; then
                log_success "$repo updated"
            else
                log_error "Failed to pull $repo"
            fi
            echo
        fi
    done
}

# Show help
show_help() {
    cat << EOF
Usage: $0 [COMMAND] [OPTIONS]

Commands:
    recent [days]   Show recent commits (default: 7 days)
    status          Show git status for all repos
    pull            Pull latest changes for all repos
    help            Show this help message

Examples:
    $0 recent           # Show last 7 days of commits
    $0 recent 14        # Show last 14 days of commits
    $0 status           # Show git status
    $0 pull             # Pull all repos
EOF
}

# Main logic
main() {
    local command=${1:-help}
    
    case $command in
        recent)
            show_recent_activity "${2:-7}"
            ;;
        status)
            show_status
            ;;
        pull)
            pull_all
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            log_error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

main "$@"
