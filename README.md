# Spirit Island Helper
A pet project that I'm working for the board game [Spirit Island](https://boardgamegeek.com/boardgame/162886/spirit-island). It is intended to streamline the game by automating setup, building invader decks, fear counting, and blight reminders. It is not intended to replace the core game.

[Spirit Island Helper](https://spirit-island.herokuapp.com/)

## setup
Install node and npm
`brew install node`

Run it
`npm start`

## Development
Always work on a new branch to avoid accidents
`git checkout -b <branch_name>`

Make some changes, and when you are ready, commit and submit a PR
`git add .`
`git commit -m "meaningful commit message"`

Push it
`git push`
or if this is a new branch with no upstream, set the upstream with:
`git push --set-upstream origin <branch_name>`

Go and create a new PR, and if it looks good, merge it. If it's a complicated change, make sure you have someone else to look at it as well.

## Deployment
Currently using [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) to deploy. Follow the tutorial to deploy the project. It is using the free tier service, which means it will die after 30 minutes of inactivity.

----

Make sure your changes are stable before deploying!!!

Get the latest master
`git checkout master && git pull`

Deploy to heroku
`git push heroku master`

Check it out
`heroku open cool`
