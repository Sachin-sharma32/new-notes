// mono - multiple projects in one repo
// poly - multiple repos for each project
// hybrid - some components in mono, some components are isolated in poly
// managing PRs is easier in poly because you can have a PR for each project isolated
// with mono, you have to have a PR for the entire project (backend + frontend) easier to visualize complete changes
// in 2 frontend projects reference each other and 1 is updated, then project 2 will have to be updated to avoid version conflicts
// one workaround is to use a bot to update the version of the dependencies in projects regularly
// poly - features can be isolated and deployed independently
// mono - features are deployed together but can use feature flagging to isolate features
//      - can use versioning to isolate features
//      - or can use tags associated with commit
//      - or can use global auto increment tags (2.0.0, 2.0.1, 2.0.2, etc with each commit, 2... for one feature, 3... for other feature)
// build times increase with monorepo that's why CI is better with poly
// testing is easier in monorepo, if test resides in A then other projects should be wired via custom API calls 
// if projects/components are highly related then monorepo, keep the rest in poly
// tools like Bazel can improve build times in monorepo
// via github's CODEOWNERS you can provide access rights for specific directories in monorepo setup for granular control across teams
// for mid and large organizations poly is better for issue tracking to isolate issues, for small teams monorepo is better coz for big repo it will get confusing
// if an organisation has open source and closed sources work mono will not work, as you cannot expose specific directories to public 