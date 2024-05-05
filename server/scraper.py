import re
import dotenv
import os
import time
from itertools import product

import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

import urllib

# Initialize some stuff for undetected_chromedriver to do the scraping
dotenv.load_dotenv()
options = Options()
options.binary_location = os.environ.get("BROWSER_PATH")
data_dir = os.environ.get("DATA_DIR")
options.add_argument(f'--user-data-dir={data_dir}')
driver = uc.Chrome(options=options)
driver.minimize_window()

adj = [
    'Majestic',
    'Serene',
    'Breathtaking',
    'Untamed',
    'Pristine',
    'Tranquil',
    'Scenic',
    'Picturesque',
    'Idyllic',
    'Grand',
    'Rustic',
    'Dramatic',
    'Remote',
    'Lush',
    'Exotic',
    'Magnificent',
    'Expansive',
    'Towering',
    'Ancient',
    'Mystical',
    'Invigorating',
    'Solitary',
    'Vast',
    'Awe-inspiring',
    'Enchanting',
    'Panoramic',
    'Peaceful',
    'Harmonious',
    'Tranquility',
    'Sublime',
    'Remote',
    'Secluded',
    'Stunning',
    'Natural',
    'Primal',
    'Breathless',
    'Majestic',
    'Raw',
    'Captivating',
    'Fascinating',
    'Wild',
    'Remote',
    'Timeless',
    'Inspiring',
    'Unique',
    'Endless',
    'Boundless',
    'Towering',
    'Iconic',
    'Historic',
    'Ancient',
    'Modern',
]

terms = [
    'buildings',
    'trees',
    'waterfalls',
    'mountains',
    'sunset',
    'sunrise',
    'sky',
    'clouds',
    'birds',
    'flowers',
    'snow',
    'water',
    'cities',
    'beaches',
    'hills',
    'forest',
    'animals',
    'birds',
    'dogs',
    'cats',
    'puppies',
    'kittens',
    'space',
    'ocean',
    'desert',
    'planets',
    'stars',
    'cars'
]

permutations = [str(i[0])+str(i[1]) for i in product(adj, terms)]

for term in permutations:
    url = 'https://www.google.com/search?q={}&sca_esv=e57395570566e342&sca_upv=1&biw=2560&bih=1327&udm=2&sxsrf=ACQVn0-swdr8OGX90aDQUc4tzB96AfYzMQ%3A1712067855432&ei=DxUMZuT8GZ-BhbIP9fS4gAs'.format(
        term)
    driver.get(url)
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(5)

    img_res = driver.find_elements(
        By.XPATH, "//img[contains(@class, 'YQ4gaf') and @width > 100]") # this class value is specific to different machines

    img_urls = [img.get_attribute('src') for img in img_res]
    img_titles = [img.get_attribute('alt') for img in img_res]

    data_dest = os.getcwd() + '/data'

    get_name = lambda input: re.sub(r'\W', '_', input)
    for i in range(15):
        urllib.request.urlretrieve(
            str(img_urls[i]), data_dest + f"/{get_name(img_titles[i])[:15]}.jpg")

driver.quit()
