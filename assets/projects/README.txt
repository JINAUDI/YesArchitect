Project image folder system
===========================

Add every project inside this folder as its own subfolder.

Folder format:

assets/projects/
  Project Name/
    1.jpg
    2.jpg
    3.jpg
    4.jpg
    ...
    15.jpg
    16.jpg
    etc.

Image meaning:

1.jpg = cover image. This is used on project cards and as the hero image on the project detail page.
2.jpg onward = all supporting images shown inside the project detail gallery.

You can use .jpg, .jpeg, .png, .webp, or .avif.
Keep the number first: 1.jpg, 2.png, 3.webp, 10.webp, etc.

The local Codex server scans these folders automatically through:
assets/projects/projects.json

For static hosting, keep projects.json updated if you add brand new project folders.
