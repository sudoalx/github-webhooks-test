import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GitHubService {
  onStar(payload: GitHubStarPayload): string {
    let message: string = "";
    const { starred_at, sender, repository, action } = payload;

    if (action === "created") {
      message = `User ${sender.login} starred the repository ${repository.full_name} at ${starred_at}`;
    } else if (action === "deleted") {
      message = `User ${sender.login} unstarred the repository ${repository.full_name}`;
    } else {
      message = `Unknown action: ${action} for repository ${repository.full_name} by user ${sender.login}`;
    }

    return message;
  }

  onIssue(payload: GitHubIssuePayload): string {
    let message: string = "";
    const { action, issue, repository, sender } = payload;

    switch (action) {
      case "opened":
        message = `User ${sender.login} opened issue ${issue.title} on repository ${repository.full_name}`;
        break;
      case "closed":
        message = `User ${sender.login} closed issue ${issue.title} on repository ${repository.full_name}`;
        break;
      case "reopened":
        message = `User ${sender.login} reopened issue ${issue.title} on repository ${repository.full_name}`;
        break;
      default:
        message = `Unknown action: ${action} for issue ${issue.title} on repository ${repository.full_name} by user ${sender.login}`;
        break;
    }
    return message;
  }
}
