# Section 14 - Deploying To Production

## :raising_hand_man: TDIL

### Heroku CLI

[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

[Heroku CRA Build Pack](https://github.com/mars/create-react-app-buildpack)

```console
$ heroku login

$ heroku create appName --buildpack gitUrl

$ git heroku push HEAD:master
```

### Git + Heroku commands

```console
$ git push heroku master
```

위 명령어가 어떻게 작동하는지 궁금할 것이다. 위 명령어를 실행하기 위해서 항상 몇 가지의 스텝을 거쳐야 한다.

- Installing Git, Heroku
- Creating a local Git repo
- Sign-in Heroku via CLI
- Creating heroku handle to hosting point

위 명령어는 `Heroku` 보다는 `Git` 에 관련된 내용이다. 히로쿠는 Git에 의존하는 배포를 위한 호스팅 플랫폼일 뿐이다.

기본적인 `push`의 개념은 우리가 `local repository`에서 가지고 있던 무언가를 어디론가 보내는 것이고, 이 경우에는 `remote repository`가 될 것이다.

Git에서 우리는 `push`를 사용하기 위해 사전에 remote repository에 대한 레퍼런스로 작동하는 `remote`를 생성한다. 아래와 같은 커맨드로 작성할 수 있다.

```console
$ git remote add <remote-name-of-our-choice> <URL-where-pushing-app>
```

기본적인 push 명령어의 구조는

```console
$ git push <remote-name> <branch>
```

따라서 `$ git push heroku master`는 실제로 remote repo인 'heroku'에 local repo를 푸쉬하는 것뿐이다.

여기서 어떻게 'heroku'라는 remote가 만들어졌는지 궁금할 수 있는데, 이는 우리가 `$ heroku create ..` 을 실행했을 때 자동으로 추가되었다.

따라서 우리는 `$ heroku create` 를 실행했을 때, `$ git remote add heroku git@heroku.com:somerepo.git` 의 명령어가 암묵적으로 실행되었음을 알 수 있다.
