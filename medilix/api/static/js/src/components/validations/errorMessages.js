/**
 * Created by faradj on 4/13/17.
 */
export const isRequired = fieldName => `Необходимо ввести ${fieldName}.`;

export const mustMatch = otherFieldName => {
    return (fieldName) => `${fieldName} и ${otherFieldName} должны совпадать.`;
};

export const minLength = length => {
    return (fieldName) => `${fieldName} должен быть минимум ${length} символов.`;
};