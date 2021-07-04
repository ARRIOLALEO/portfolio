import os
import pathlib
import unittest
from selenium import webdriver
# Create your tests here.

driver = webdriver.Firefox()
driver.get("http://127.0.0.1:8000/")
driver.close()

