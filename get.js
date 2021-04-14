import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const id = event.pathParameters.id;

  const params = {
    TableName: process.env.tableName,
    Key: {
      // The attributes of the item to be created
      userId: "123", // The id of the author
      noteId: id,
    },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  return result.Item;
});
