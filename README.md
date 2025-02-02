# Web Development Project 4 - Veni Vici!

Submitted by: Lou Salvant

This web app: is a cat discovery app, similiar to the exemplar given. It allows the user to fetch images and attributes of different caps through TheCatAPI. The user can add an attribute to the "Ban List" and this will filter out all cats that match this attribute. The user can also see their history of cats already seen.

Time spent: 4 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [x] Multiple types of attributes can be added to the ban list
- [x] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3FkZHlqZ25sZnZ5NTdneGFiaWxvZGQ2ZHpsM3dkbHA2aW9iaG93ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mR2iAHvGX9DcZb9D8y/giphy.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I had trouble making sure the cats were being filtered out as expected. I encountered problems with some attributes filtering out cats but others not. To fix this issue, I had to make modifications to the handlAttributeClick. I also, had issues with the styling. Although, it is much better looking than it previously was, it still isn't what I wanted exactly. Unfortunately, frustration got the best of me, and I decided to settle.

## License

    Copyright [2024] [Lou Salvant]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.