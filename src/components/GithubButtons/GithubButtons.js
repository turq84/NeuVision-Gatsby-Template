import React from "react"
import GitHubButton from "react-github-btn"

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/turq84/NeuVision-Gatsby-Template/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork cobidev/gatsby-simplefolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/turq84/NeuVision-Gatsby-Template"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star cobidev/gatsby-simplefolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
)

export default GithubButton
