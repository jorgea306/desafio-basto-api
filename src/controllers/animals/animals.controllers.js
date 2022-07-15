import Animal from '../../schemas/animals/Animal.js'

export const getAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        if (!animals) return res.status(204).json();
        res.json(animals);
    } catch (error) {
        res.json(error)
    }
};

export const getAnimal = async (req, res) => {
    const animal = await Animal.findById(req.params.id);
    if (!animal) return res.status(204).json({message: 'This animal does not exist'})
    return res.json(animal);
};

export const createAnimal = async (req, res) => {  
    const id_senasa = await Animal.findOne({id_senasa: req.body.id_senasa});
    if (id_senasa) return res.status(409).json({message: 'The id_senasa already exists'})

    const number_device = await Animal.findOne({number_device: req.body.number_device});
    if (number_device) return res.status(409).json({message: 'The number_device already exists'})
   
    try {
        const animal = new Animal(req.body)
        const savedAnimal = await animal.save()
        res.json(savedAnimal)
    } catch (error) {
        res.json(error)
    }
};

export const updateAnimal = async (req, res) => {
    const animalUpdate = await Animal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!animalUpdate) return res.status(204).json({message: 'The Animal is not exists'})
    res.json(animalUpdate);
};

export const deleteAnimal = async (req, res) => {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (!animal) return res.status(204).json({message: 'The Animal is not exists'})
    return res.json({message: 'The Animal is delete'});
};