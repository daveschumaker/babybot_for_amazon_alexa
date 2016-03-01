# 👶 BabyBot for Amazon Echo

If you're like me, you have a newborn baby hanging around the house. You're probably getting little sleep and freaking out about being responsible for this brand new life. What is this little one doing now? What will they be doing next week? How old are they? Where did I put my glasses?!

Well, since you have an Amazon Echo (because like I said above, you're like me), this handy app can give you some guidance. You simply say something like:

"Hey Alexa, ask BabyBot about the little one!"

Alexa will respond with the age of your baby and a helpful blurb that describes what's going on in your newborn's life this week.

[View demo on Youtube](https://www.youtube.com/watch?v=vjXoTroThG8)

If you want to run this on your own, you'll need a few things:

1. A publically accessible server capable of running this Node project.
2. An SSL certificate (this is an Amazon requirement for running API endpoints accessible via Alexa)
3. An Amazon developer account.

Once you've downloaded the app, install dependencies via the usual method:

```
npm install
```

At the top of server.js, you can enter your newborn's information:

```
babyStore.babyName = "MonsterBaby";
babyStore.babyGender = "F"; // choose either M or F
babyStore.babyBirthday = "02-29-2016"; // Date: MM-DD-YYYY
```

You can run the app by simply invoking _npm start_ or using your favorite Node process manager like _forever_ or _pm2_.

And then you're off to the races! Good luck -- because if you're anything like me, you're going to need it.