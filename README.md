# BOB-FETCH-BANK-DETAILS

## Problem Statement
- Create a REST service that can fetch bank details, using the data given in the API’s query parameters.

## Case 1
- Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
- Request URL  - /api/search?q=Mumbai&limit=2&offset=1 

## Output of Case 1
![image](https://user-images.githubusercontent.com/86424600/221765471-3203ea9a-e334-4cdb-8e25-ee8a8686cb05.png)



## Case 2
- Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset
- Request URL  - /api/branch?q=LONI&limit=1&offset=1 

## Output of Case 2

![image](https://user-images.githubusercontent.com/86424600/221766015-1715a9f0-5b9e-4a80-8ab5-73796386b235.png)
![image](https://user-images.githubusercontent.com/86424600/221766350-aa1dbac3-c022-465c-8a4b-723d2fc017ff.png)


