import React from 'react';

export default class Select extends React.Component {
    render () {
        return (
            <fieldset>
                <label for="job">Job Role:</label>
                <select id="job" name="user_job">
                  <optgroup label="Web">
                    <option value="frontend_developer">Front-End Developer</option>
                    <option value="php_developor">PHP Developer</option>
                    <option value="python_developer">Python Developer</option>
                    <option value="rails_developer"> Rails Developer</option>
                    <option value="web_designer">Web Designer</option>
                    <option value="WordPress_developer">WordPress Developer</option>
                  </optgroup>
                </select>
            </fieldset>
        )
    }
}