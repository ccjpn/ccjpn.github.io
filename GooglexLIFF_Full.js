liff.ready
      .then(() => {
        if (liff.isLoggedIn()) {
          return liff.getProfile();
        } else {
          liff.login({
            redirectUri: "https://tutorial.sirateek.me/medium/GoogleForm_LIFF/",
          });
        }
      })
      .then((profile) => {
        window.location.replace(
          `https://docs.google.com/forms/d/e/1FAIpQLScTi2cQxv41a5TsSdXKjdqRrwqXcONVIyuRdSK9vWL8muiYEA/viewform?usp=pp_url&entry.1380382849=${profile.userId}&entry.1935461714=${profile.displayName}&entry.562371842=${profile.pictureUrl}&entry.1520526497=${profile.statusMessage}`
        );
      });
