'use strict';

// module.exports.hello = async event => {
//   return {
//     statusCode: 201,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };

module.exports.hello = (event, context, callback) => {
  console.log('Event is', event);
  console.log('Context is', context);
  
  let remainingTime = context.getRemainingTimeInMillis();
  let functionName = context.functionName;
  let awsRequestId = context.awsRequestId;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      ev: event,
      rt: remainingTime,
      fn: functionName,
      aid: awsRequestId
    })
  };

  callback(null, response);
};