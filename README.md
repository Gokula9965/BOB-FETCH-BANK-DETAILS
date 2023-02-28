# BOB-FETCH-BANK-DETAILS
## <h1>Deployment Github link - https://github.com/Gokula9965/Bank<h1>
  
## Problem Statement
- Create a REST service that can fetch bank details, using the data given in the API’s query parameters.

## Case 1
- Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
- Request URL  - /api/search?q=Mumbai&limit=2&offset=1 

## Output of Case 1
![image](https://user-images.githubusercontent.com/86424600/221775722-0b99a6a7-af4d-46a1-bde2-e93c04c30356.png)




## Case 2
- Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset
- Request URL  - /api/branch?q=LONI&limit=1&offset=1 

## Output of Case 2

## Part1
![image](https://user-images.githubusercontent.com/86424600/221775870-7afc48b1-40c3-4242-bbc5-74a4abfff913.png)

## Part2
![image](https://user-images.githubusercontent.com/86424600/221776050-d1fa84ac-2ac1-4586-b40d-e149a9313478.png)



