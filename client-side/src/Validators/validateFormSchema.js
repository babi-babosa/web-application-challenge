// Create your own validationStateSchema
// stateSchema property should be the same in validationStateSchema
// in-order a validation to works in your input.
const stateValidatorSchema = {
    first_name: {
        required: true,
        validator: {
        func: (value) => /^[a-zA-Z]+$/.test(value),
        error: 'Invalid first name format.',
        },
    },
    last_name: {
        required: true,
        validator: {
        func: (value) => /^[a-zA-Z]+$/.test(value),
        error: 'Invalid last name format.',
        },
    },
    tags: {
        // required: true,
        validator: {
        func: (value) => /^(,?\w{3,})+$/.test(value),
        error: 'Invalid tag format.',
        },
    },
};