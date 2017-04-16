/**
 * Created by faradj on 4/13/17.
 */
export const isRequired = fieldName => `${fieldName} is required`;

export const mustMatch = otherFieldName => {
    return (fieldName) => `${fieldName} must match ${otherFieldName}`;
};

export const minLength = length => {
    return (fieldName) => `${fieldName} must be at least ${length} characters`;
};