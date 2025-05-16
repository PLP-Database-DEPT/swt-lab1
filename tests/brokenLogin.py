from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
try:
    driver.get("https://demoqa.com/login")

    # ❌ BUG: Wrong ID for username!
    driver.find_element(By.ID, "fakeUsername").send_keys("testuser")
    driver.find_element(By.ID, "password").send_keys("Password123!")
    driver.find_element(By.ID, "login").click()

    # ❌ Missing: Check if login worked
finally:
    driver.quit()
