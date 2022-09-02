import React, { useState } from 'react';
import './PasswordForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './characters';
import { COPY_SUCCESS } from './message';

let PasswordForm = () => {

    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState('');
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setncludeSymbols] = useState(false);

    const handleGeneratePassword = (e) => {

        if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
            notify('You must select atleast one option', true);

        }

        let characterlist = '';

        if (includeLowercase) {
            characterlist = characterlist + lowerCaseLetters;
        }

        if (includeUppercase) {
            characterlist = characterlist + upperCaseLetters;
        }

        if (includeNumbers) {
            characterlist = characterlist + numbers;
        }

        if (includeSymbols) {

            characterlist = characterlist + specialCharacters;

        }

        setPassword(createPassword(characterlist));

    }

    const createPassword = (characterlist) => {
        let password = '';
        const characterlistLength = characterlist.length;

        for (let i = 0; i < passwordLength; i++) {

            const characterIndex = Math.floor(Math.random() * characterlistLength);
            password = password + characterlist.charAt(characterIndex);

        }
        return password;

    }

    const copyToClipboard = () => {
        const newTextArea = document.createElement('textarea');
        newTextArea.innerText = password;
        document.body.appendChild(newTextArea);
        newTextArea.select()
        document.execCommand('copy')
        newTextArea.remove();

    }

    const notify = (message, hasError = false) => {

        if (hasError) {

            toast.error(message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
        else {

            toast.info(message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }


    }

    const handleCopyPassword = (e) => {

        if (password === '') {
            notify('Nothing to copy', true);

        } else {
            copyToClipboard();
            notify(COPY_SUCCESS);
        }

    }

    return (
        <div className='formContainer mt-5' >

            <div className="password-container ">
                <input className="form-control" type="text" value={password} aria-label="readonly input example" readonly></input>
                <input onClick={handleCopyPassword} className="btn btn-warning copy-password-btn" type="button" value="Copy" />
            </div>


            {/* PASSWORD LENGTH */}
            <div class="input-group mt-4">
                <span className="input-group-text" id="basic-addon2">Password Length</span>
                <input type="number" className="form-control" min={10} max={20} value={passwordLength} placeholder="min-10 max-20 characters" onChange={(e) => setPasswordLength(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />

            </div>

            {/* CHECKBOXES UPPERCASE */}
            <div className="input-group mt-4">
                <input className="form-control" type="text" value="Include uppercase letters" aria-label="readonly input example" readonly disabled />

                <span className="input-group-text" ><input
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                    className="form-check-input " type="checkbox" value="" id="flexCheckDefault1" /></span>
            </div>

            {/* CHECKBOXES LOWERCASE */}
            <div className="input-group mt-4">
                <input className="form-control" type="text" value="Include lowercase letters" aria-label="readonly input example" readonly disabled />
                <span className="input-group-text" ><input
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                    className="form-check-input " type="checkbox" value="" id="flexCheckDefault2" /></span>
            </div>

            {/* CHECKBOXES NUMBERS */}
            <div className="input-group mt-4">
                <input className="form-control" type="text" value="Include numbers" aria-label="readonly input example" readonly disabled />
                <span className="input-group-text" ><input
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="form-check-input " type="checkbox" value="" id="flexCheckDefault3" /></span>
            </div>

            {/* CHECKBOXES SYMBOLS */}
            <div className="input-group mt-4">
                <input className="form-control" type="text" value="Include symbols" aria-label="readonly input example" readonly disabled />
                <span className="input-group-text" ><input
                    checked={includeSymbols}
                    onChange={(e) => setncludeSymbols(e.target.checked)}
                    className="form-check-input " type="checkbox" value="" id="flexCheckDefault4" /></span>
            </div>

            {/* ADD BUTTON */}
            <div class="d-grid gap-2 mt-4">
                <button onClick={handleGeneratePassword} className="btn btn-warning" type="button">Generate Password</button>

            </div>

            {/* TOAST CONTAINER */}
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
    )
}

export default PasswordForm