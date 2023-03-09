import requests
from bs4 import BeautifulSoup
from selenium import webdriver
import pandas as pd

driver = webdriver.Firefox(executable_path='/nix/path/to/webdriver/executable')
driver.get('https://akosovski.github.io/Prayers.github.io/')

content = driver.page_source
soup = BeautifulSoup(content, "html.parser")

everything = soup.find('div',attrs={'class':"catalog-list"})

results = []

lama = everything.find('small',attrs={'class':"text"}).text

mylist = pd.DataFrame({'Durasi: ': results})
mylist.to_csv("data.csv")