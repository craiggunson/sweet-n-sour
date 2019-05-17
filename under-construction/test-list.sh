#!/bin/bash

curl https://bb27stnakjcmxpdx2elxl5wjpq.appsync-api.ap-southeast-2.amazonaws.com/graphql \
-H "x-api-key: da2-ieujrolk4nhypmzuiokvazfiwa" -H 'Content-Type: application/json' \
-d '{"query" : "query listFeedbacks {\nlistFeedbacks {\nitems {\nid\nwhen\nsweet\nsour\n}\n}\n}"}'




