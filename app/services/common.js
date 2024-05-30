export async function queryList  (model,limit,offset, order)  {
  try {
    const data = await model.findAndCountAll({
      ...(limit  && { limit, }),
      ...(offset  && { offset, }),
      ...(order  && { order, }),
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};