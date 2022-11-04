from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import ElementClickInterceptedException
from selenium.common.exceptions import StaleElementReferenceException
from selenium.common.exceptions import NoSuchElementException

def obterLinks():
  driver = webdriver.Firefox()
  url = 'https://www.tudogostoso.com.br/categorias/1000-bolos-e-tortas-doces'
  cssclass = 'recipe-card-with-hover'
  driver.get(url)
  driver.minimize_window()
  f = open('./test.json', 'a')
  while True:
    try:
      elements = driver.find_elements(By.CLASS_NAME, cssclass)
      pagination = driver.find_element(By.CSS_SELECTOR, 'div.pagination')
      row = pagination.find_element(By.CSS_SELECTOR, 'div.row')
      next = row.find_element(By.CSS_SELECTOR, 'a.next').get_attribute('href')
      linksList = []
      for element in elements:
        title = element.find_element(By.CSS_SELECTOR, 'h3.title')
        link = element.find_element(By.CSS_SELECTOR, 'a.link')
        linksList.append({
          "receita": title.text,
          "link": link.get_attribute('href')
        })
      f.write(repr(linksList))
      driver.get(next)
    except ElementClickInterceptedException:
        driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')
        driver.find_element(By.CLASS_NAME, cssclass).click()
    except NoSuchElementException:
        print('Não encontrou elementos')
        break
    except StaleElementReferenceException:
        driver.refresh()
        print('recarregou a pagina') 
  
  f.close()
  return driver.close()

obterLinks()
