const req = () => {
  return new Promise((resolve, reject) => {
    resolve({
      
      apps: [
        {
          name: 'child',
          entry: 'http://localhost:8081',
        },
        {
          name: 'child2',
          entry: 'http://localhost:8082',
        },
      ],
    })
  })
}

export default req;