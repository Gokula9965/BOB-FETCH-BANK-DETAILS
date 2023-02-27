# BOB-FETCH-BANK-DETAILS

## Problem Statement
- Create a REST service that can fetch bank details, using the data given in the API’s query parameters.

## Case 1
- Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
- Request URL  - /api/search?q=Mumbai&limit=2&offset=1 

## Output of Case 1
 ![image](https://user-images.githubusercontent.com/86424600/221595872-287e8463-3061-4741-8418-99d94417aaa7.png)


## Case 2
- Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset
- Request URL  - /api/branch?q=LONI&limit=1&offset=1 

## Output of Case 2
![image](https://user-images.githubusercontent.com/86424600/221596016-4732a048-90d7-4c46-b4c2-100336467059.png)

![image](https://user-images.githubusercontent.com/86424600/221596237-2bef3c25-ed2a-437d-9f43-5d2ab8c81a54.png)

