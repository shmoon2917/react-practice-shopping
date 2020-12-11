# Section 22 - Stripe Payments Part 2 - Backend

## :raising_hand_man: TDIL

### Deploying To Production

이미 배포한 히로쿠 앱을 새로 세팅하기 위해서, 배포하려하는 앱의 이름을 알아야 한다. 히로쿠에 현재 올려놓은 앱들을 확인하고 연결하기 위해 다음 명령어를 실행한다

```console
$ heroku apps
$ heroku git:remote -a <PASTE_YOUR_APP_NAME_HERE>
```

이전 시간에 단순한 CRA 프로젝트를 배포하는 빌드팩을 사용했으므로, 이를 지워야 한다. 다음과 같은 명령어를 실행한다

```console
$ heroku buildpacks
$ heroku buildpacks:remove <PASTE_BUILDPACKS_URL>
```

로컬 환경에서의 `.env`파일에 저장해둔 `STRIPE_SECRET_KEY`를 히로쿠에도 세팅해야하므로 히로쿠 프로젝트에 변수를 세팅한다.

```console
$ heroku config:set STRIPE_SECRET_KEY=<YOUR_KEY>
```

마지막으로 배포 명령어를 실행하면 완료

```console
$ git push heroku main --force
```

#### --force 를 붙이는 이유

> 현재 레포지터리와는 완전히 다른 레포지터리를 전에 배포했던 앱을 push 했기 때문인데, `--force` 플래그를 붙이면 해결된다. 이는 실제 프로젝트에서는 사용할 일이 없다.

이후 아래 명령어를 통해 새롭게 배포된 프로젝트를 브라우저로 열 수 있다.

```console
$ heroku open
```
