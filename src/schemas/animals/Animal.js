import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const animalSchema = new Schema({
    id_senasa: {
        type: String,
        require: true,
        trim: true,
        minLength: [16, 'La cantidad permitida es de 16 Caracteres'],
        maxLength: [16, 'La cantidad permitida es de 16 Caracteres'],
        unique: true
    },
    type_animal: {
        type: String,
        require: [true, 'El parametro tipo de animal es obligatorio'],
        trim: true
    },
    weight: {
        type: Number,
        require: [true, 'El parametro peso es obligatorio y expresado en Kg'],
        trim: true
    },
    name: {
        type: String,
        require: [true, 'El parametro nombre es obligatorio'],
        trim: true,
        maxLength: [200, 'La cantidad maxima permitida es de 200 Caracteres'],
    },
    type_device : {
        type:String,
        require: [true, 'El parametro tipo de dispositivo es obligatorio'],
        trim: true
    },
    number_device : {
        type: String,
        minLength: [8, 'La cantidad permitida es de 8 Caracteres'],
        maxLength: [8, 'La cantidad permitida es de 8 Caracteres'],
        require: [true, 'El parametro numero de dispositivo es obligatorio'],
        trim: true,
        unique: [true, 'El parametro numero de dispositivo debe ser unico']
    }

}, {
    versionKey: false,
    timestamps: true
});

export default model('animal', animalSchema);