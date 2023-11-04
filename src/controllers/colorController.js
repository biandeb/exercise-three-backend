import ColorModel from '../models/colorSchema.js';

export const getColors = async (_, res) => {
  try {
    const data = await ColorModel.find({});

    res.json(data);
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: 'Ocurrió un error al conectarse a la base de datos.',
    });
  }
};
