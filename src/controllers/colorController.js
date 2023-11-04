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

export const postColor = async (req, res) => {
  const { body } = req;

  const newColor = new ColorModel({
    name: body.name,
    hexa: body.hexa,
    rgb: body.rgb,
  });

  try {
    await newColor.save();

    res.status(201).json({
      message: 'Color creado exitosamente 🌈',
    });
  } catch (e) {
    if (e.message.includes('duplicate')) {
      res.status(400).json({
        message: 'El color ya está en uso.',
      });
      return;
    }
    res.status(500).json({
      message: 'Ocurrió un error guardando el color.',
      error: e.message,
    });
  }
};
