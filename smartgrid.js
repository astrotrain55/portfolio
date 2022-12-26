import smartgrid from 'smart-grid';

smartgrid('./src/assets', {
  filename: 'smartgrid',
  outputStyle: 'styl',
  columns: 24,
  offset: '10px',
  mobileFirst: true,
  container: {
    maxWidth: '1600px',
    fields: '20px',
  },
  breakPoints: {
    w1200: {
      width: '1200px',
    },
    w1000: {
      width: '1000px',
    },
    w500: {
      width: '500px',
    },
  },
  mixinNames: {
    size: 'col-size',
  },
  tab: '  ',
});
