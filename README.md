# BOB-FETCH-BANK-DETAILS

## Problem Statement
- Create a REST service that can fetch bank details, using the data given in the API’s query parameters.

## Case 1
- Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
- Request URL  - /api/search?q=Mumbai&limit=2&offset=1 

## Output of Case1
 ![Screenshot (284)](https://user-images.githubusercontent.com/86424600/221593874-1869a393-24da-4e74-984a-2c1ec46c1b7f.png)

## Case 2
- Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset
- Request URL  - /api/branch?q=LONI&limit=1&offset=1 

## Output of Case2
![Screenshot (285)](https://user-images.githubusercontent.com/86424600/221594668-00b59f18-4271-4a21-aac4-dbf0ce64dc33.png)
