Week 14 Assignment

# Belly Button Challenge

This project presents an interactive dashboard that allows users to explore the Belly Button Biodiversity dataset, which catalogs the microbes found in human navels. The dataset reveals that a small subset of microbial species (operational taxonomic units (OTUs)) is present in more than 70% of people, while others are relatively rare.

This challenge can be found at https://simranboparai.github.io/belly-button-challenge/

# Table of Contents

- [Belly Button Challenge](#belly-button-challenge)
- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Repository Setup:](#repository-setup)
  - [Git Bash Command Example](#git-bash-command-example)
- [Repository Structure](#repository-structure)
- [Challenge Instructions](#challenge-instructions)
- [Horizontal Bar Chart Example Code](#horizontal-bar-chart-example-code)
- [Acknowledgements](#acknowledgements)
- [Author](#author)
# Prerequisites

Before working on the Belly Button Challenge, ensure you complete the following requirements:

## Installation 
- Install VS Code, Python, JavaScript, and Live Server on your machine (can use Jupyter Notebook)
- Install the d3 library
- Create a new repository called 'belly-button-challenge' in GitHub with README and .gitignore file.

## Repository Setup:
  - Create a new repository called 'belly-button-challenge' in GitHub with a README file
  - Copy the SSH key in GitHub
  - In git bash create a folder named 'belly-button-challenge'
  - Navigate into the challenge directory 
  - Clone SSH key in directory
    - Import the starter code, index.html, and samples.json files into the directory
    - Create a folder called 'Images' for all of the browser screenshots 
  - Git add, commit, and push changes into the repository


## Git Bash Command Example
Navigate into a working directory. 
```
mkdir 'belly-button-challenge
git clone (add you ssh key)
cd 'belly-button-challenge'
mkdir 'Images'
git add .
git commit -m "Pushing challenge work"
git push 
```


# Repository Structure
- belly-button-challenge
    - .git
    - Starter_Code
        - static
            - js
                - .gitkeep
                - app
        - index
        - samples
 - gitignore
 - README.md
# Challenge Instructions

Ensure you have downloaded the starter code and resources files to start the project.

Complete the following setps: 

1. Use the D3 library to read in ```samples.json``` from the URL.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.  
- Use ```sample_values``` as the values for the bar chart.
- Use ```otu_ids``` as the labels for the bar chart.
- Use ```otu_lables``` as the hovertext for the chart.
3. Create a bubbly chart that displays each sample.
- Use ```otu_ids``` for the x values.
- Use ```sample_values``` for the y values.
- Use ````sample_values```` for the marker size.
- Use ```otu_ids``` for the marker colors.
- Use ```otu_labels``` for the text values.
4. Display the sample's metadata, i.e., an individual's demographic inforamtion.
- Loop through each key-value pair from the metadata JSON object and create a text string.
- Append an html tag with each text to the ```#sample-metadata``` panel. 
5. Update all the plot when a new sample is selected and create a layout for the dashboard. 
6. Deploy the app to a free static page hosting service, such as GitHub Pages. 



# Horizontal Bar Chart Example Code

```VS Code
    # Build a Bar Chart
    # Don't forget to slice and reverse the input data appropriately
    let trace2 = {

    x: sample_values.slice(0, 10).reverse(),
    y: otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
    text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    };

    # Render the Bar Chart
    let trace2Layout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: {title: "Number of Bacteria"},
      margin: {t: 30, 1: 150}
    };

    # Render the Bar Chart
    Plotly.newPlot("bar", [trace2], trace2Layout)
  });

```

# Acknowledgements

I want to mention the following individuals and resources for their assistance and support throughout this assignment: 
- Study group members
    - Omid Khan - omidk414@gmail.com - omidk414
    - Evan Wall - - ewall@escoffier.edu - Ewall24
- Xpert Learning Assistant and ChatGPT


# Author

For any questions or feedback, please contact:
- Name: Gursimran Kaur (Simran)
- Email: kaursimran081999@gmail.com