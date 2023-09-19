// const originalArray = [
//     'https://swype.blob.core.windows.net/uploads/2023-07-12/992ee48a-6e5f-4e90-9d50-2f1da77b4b2f.mp4',
//     'https://swype.blob.core.windows.net/uploads/2023-07-12/e762b2ab-2f32-4018-9e49-b612b180fe0a.mp4',
//     'https://swype.blob.core.windows.net/uploads/2023-07-12/0f5543b1-e3e8-4821-8aea-8fc7bf5d4932.mp4',
//     'https://swype.blob.core.windows.net/uploads/2023-07-12/2058165a-1d3a-4e9b-8d1e-b5c8010b83f3.mp4',
//     'https://swype.blob.core.windows.net/uploads/2023-07-12/1163cc05-5a79-45f9-b7e7-5dfd1b16528e.mp4',
//     'https://swype.blob.core.windows.net/uploads/2023-07-12/4da23a39-4e72-48ff-8e2b-2517f181d447.mp4',
//     'https://swype.blob.core.windows.net/uploads/2023-07-12/51e4a8d4-3b7a-4a22-8240-96e4aa705510.mp4',
//     'https://swype.blob.core.windows.net/uploads/2023-08-03/c931a817-2f5d-4994-814f-3c082b5c737c.mp4'
//   ];
  
//   const chunkSize = 1; // Number of elements per array
  
//   const resultArrays = [];
//   for (let i = 0; i < originalArray.length; i += chunkSize) {
//     resultArrays.push(originalArray.slice(i,  i + chunkSize));
//   }
  
//   const formattedData = {
//     status: 1,
//     payload: {
//       videoUrls: resultArrays.map(arr => ({
//         videoUrls: arr
//       }))
//     }
//   };
  
//   console.log(JSON.stringify(formattedData, null, 1));

const originalArray = [
    'https://swype.blob.core.windows.net/uploads/2023-07-12/992ee48a-6e5f-4e90-9d50-2f1da77b4b2f.mp4',
    'https://swype.blob.core.windows.net/uploads/2023-07-12/e762b2ab-2f32-4018-9e49-b612b180fe0a.mp4',
    'https://swype.blob.core.windows.net/uploads/2023-07-12/0f5543b1-e3e8-4821-8aea-8fc7bf5d4932.mp4',
    'https://swype.blob.core.windows.net/uploads/2023-07-12/2058165a-1d3a-4e9b-8d1e-b5c8010b83f3.mp4',
    'https://swype.blob.core.windows.net/uploads/2023-07-12/1163cc05-5a79-45f9-b7e7-5dfd1b16528e.mp4',
    'https://swype.blob.core.windows.net/uploads/2023-07-12/4da23a39-4e72-48ff-8e2b-2517f181d447.mp4',
    'https://swype.blob.core.windows.net/uploads/2023-07-12/51e4a8d4-3b7a-4a22-8240-96e4aa705510.mp4',
    'https://swype.blob.core.windows.net/uploads/2023-08-03/c931a817-2f5d-4994-814f-3c082b5c737c.mp4'
  ];
  
  // Remove the last URL
  const modifiedArray = originalArray.slice(0, -1);
  
  const formattedData = {
    status: 1,
    payload: {
      videoUrls: modifiedArray
    }
  };
  
  console.log(JSON.stringify(formattedData, null, 1));
  
  