Just a short demo to demonstrate luxon formatting dates for different locales

See https://github.com/moment/luxon/issues/348

Clone and run `npm i` followed by `npm start` to see german and french examples

e.g.

```
...
de: 26. Juni 2019, 08:03 MESZ
fr: 26 juin 2019 à 08:03 UTC+2
```

You can also run `npm run alternate` to see starting node with an explicit `--icu-data-dir` 
parameter instead of using the env variable method.

This is running on Windows 10 with node 10.15.0. the NODE_ICU_DATA environment
variable must not have been set or you might get `could not initialize ICU (check NODE_ICU_DATA or --icu-data-dir parameters)`