// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let sampleArray = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = sampleArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}


// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let sampleArray = samples.filter(sampleObj => sampleObj.id == sample);
    let result = sampleArray[0];

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

    // Build a Bubble Chart
    let trace1 = {

    // Set the values for the Bubble Chart
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: "Earth"
      }
    };

    // Build the Bubble Chart Layout
    let trace1Layout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title: "OTU ID"},
      yaxis: {title: "Number of Bacteria"},
      height: 500,
      width: 1000
    };

    // Render the Bubble Chart
    Plotly.newPlot("bubble", [trace1], trace1Layout);

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let trace2 = {

    x: sample_values.slice(0, 10).reverse(),
    y: otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
    text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    };

    // Render the Bar Chart
    let trace2Layout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: {title: "Number of Bacteria"},
      margin: {t: 30, 1: 150}
    };

    // Render the Bar Chart
    Plotly.newPlot("bar", [trace2], trace2Layout)
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach((name) => {
      dropdown.append("option").text(name).property("value", name);
    });

    // Get the first sample from the list
    let firstSample = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
