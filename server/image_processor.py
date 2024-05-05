import base64
import glob
import ollama

import pandas as pd
from pathlib import Path


# This file will process the images in the data folder
# We will convert the images into a base64 string and also describe the image using llava
# Then save all this information into a csv file for later use.
# step 1 crate a function for ollama using lava to process an image
def llava_describe_image(img):
    res = ollama.chat(
        model='llava',
        messages=[{
            'role': 'user',
            'content': 'Give a description of this image',
            'images': [img],
        }]
    )
    return res['message']['content']

# step 2
# for each image in the data folder
# convert the image to base64
# describe the image using ollama
# create embeddings from the description
# add the b64 encoded image, description and title to a pandas dataframe
def main():
    df = pd.DataFrame(columns=['image', 'description', 'title'])
    for i, image_path in enumerate(glob.glob('data/*')):
        with open(image_path, 'rb') as f:
            img_data = f.read()

        b64_encoded = base64.b64encode(img_data).decode("utf-8")
        image_description = llava_describe_image(b64_encoded) 
        df.loc[i] = [b64_encoded, image_description, Path(image_path).stem]

        if i > 1000: # Only need 1000 images for this example
            break
    # step 3
    # save the dataframe to a csv file
    df.to_csv('./app/data/annotated.csv', index=False)

if __name__ == '__main__':
    main()