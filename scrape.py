import requests
from bs4 import BeautifulSoup

# Fetch the HTML content of the page
url = 'https://www.stopstalk.com/contests'
response = requests.get(url)
html_content = response.content

# Parse the HTML using Beautiful Soup
soup = BeautifulSoup(html_content, 'html.parser')

# Find the table containing contest information
table = soup.find('tbody')
if table is not None:
    # Find all the rows in the table
    rows = table.find_all('tr')

    # Loop over each row and extract the required information
    for row in rows:  # Skip the header row
        cols = row.find_all('td')
        name = cols[0].text.strip()
        title = cols[1].find('img')['title']
        start_time = cols[2].text.strip()
        duration = cols[3].text.strip()
        contest_link = cols[4].find('a')['href']
        
        # Print the extracted information
        print(name)
        print(title)
        print(start_time)
        print(duration)
        print(contest_link)
        print();
else: print('Data not found.')