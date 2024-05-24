from PIL import Image

# Load the image
image_path = "public/assets/logo.jpeg"
image = Image.open(image_path)

# Define the cropping box (adjust the coordinates as needed)
# This will crop out the logo without the text
crop_box = (70, 0, 230, 160)  # These values are illustrative; you might need to adjust them

# Crop the image
cropped_image = image.crop(crop_box)

# Convert image to RGBA (to add transparency)
cropped_image = cropped_image.convert("RGBA")

# Remove the black background by setting its alpha to 0
datas = cropped_image.getdata()

new_data = []
for item in datas:
    # Change all black (also shades of black)
    if item[:3] == (0, 0, 0):
        new_data.append((255, 255, 255, 0))  # Set transparency
    else:
        new_data.append(item)

cropped_image.putdata(new_data)

# Save the processed image
output_path = "public/assets/newlogo.png"
cropped_image.save(output_path)
