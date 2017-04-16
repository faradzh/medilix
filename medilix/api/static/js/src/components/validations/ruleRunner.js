/**
 * Created by faradj on 4/13/17.
 */
export const ruleRunner = (field, name, ...rules) => {
    return (state) => {
        for (let rule of rules){
            let errorMessageFunc = rule(state[field], state);
            if (errorMessageFunc){
                return {[field]: errorMessageFunc(name)};
            }
        }
        return null;
    };
};

export const check = (state, runners) => {
    return runners.reduce((memo, runner) => {
        return Object.assign(memo, runner(state));
    }, {})
};