import globalStyles from '../../../../index.module.css'
import { Sorting } from '../../Sorting/Sorting'
import styles from './AccountSettings.module.css'
import accountImg from '../../../../assets/imgs/accountImg.png'
import { useRef, useEffect, useState } from 'react'
import IMask from 'imask'

export function AccountSettings(){
        const inputRef = useRef<HTMLInputElement>(null)

        useEffect(() => {
            if (inputRef.current) {
                const mask = IMask(inputRef.current, {
                    mask: '+{7} (000) 000-00-00',
                    lazy: false,
                });
        
                mask.on('accept', () => {
                    setFormData((prev) => ({ ...prev, phone: mask.value }));
                });
            }
        }, []);
        

       const loadStoredData = () => {
        const savedData = localStorage.getItem('userProfile')
        return savedData ? JSON.parse(savedData) : {
            firstName: 'Миу',
            lastName: 'Миу',
            phone: '',
            email: '',
            birthDate: ''
        }
       }

       const [formData, setFormData] = useState<{
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        birthDate: string;
    }>(loadStoredData);
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target
            setFormData((prev) => ({
                ...prev, 
                [name]: name === 'phone' ?  IMask.pipe(value, {mask: '+{7} (000) 000-00-00'}) : value,
            }))
        }

        const handleSubmit = (e: React.FormEvent) => {
            localStorage.setItem('userProfile', JSON.stringify(formData))
            e.preventDefault()
        }

    return(
        
        <div className={`${globalStyles.flex} ${styles.accountInfo}`}>
            <Sorting />
            <div className={`${globalStyles.flex} ${styles.accountInfoSect}`}>
                <img src={accountImg} alt="" />
                <div className={styles.accountInfoSectContent}>
                    <p>{formData.firstName} {formData.lastName}</p>
                    <p>Дата регистрации: 22.11.2024</p>
                </div>
            </div>
            
            <form action="" className={` ${styles.accountInfoForm}`}  onSubmit={handleSubmit}>
                <div className={`${globalStyles.flex} ${styles.accountInfoFormInputs}`}>
                <div className={styles.accountInfoFormElement}>
                <label htmlFor="">Имя</label>
                <input name='firstName' value={formData.firstName} onChange={handleChange} type="text"  required/>
                </div>

                <div className={styles.accountInfoFormElement}>
                <label htmlFor="">Фамилия</label>
                <input name='lastName' value={formData.lastName} onChange={handleChange} type="text"  required/>
                </div>

                <div className={styles.accountInfoFormElement}>
                <label htmlFor="">Телефон</label>
                <input name='phone' value={formData.phone} onChange={handleChange}  type="tel" ref={inputRef} placeholder='+7 (___) ___-__-__' required/>
                </div>

                <div className={styles.accountInfoFormElement}>
                <label htmlFor="">Электронная почта</label>
                <input name='email' value={formData.email} onChange={handleChange} type="email"  required/>
                </div>

                <div className={styles.accountInfoFormElement}>
                <label htmlFor="">Дата рождения</label>
                <input name='birthDate' value={formData.birthDate} onChange={handleChange} type="date" onFocus={(e) => e.target.showPicker()}  id=""  required/>
                </div>
                </div>

                <div className={styles.accountInfoFormBtns}>

                <button type='button'>Выйти</button>
                <button type='submit'>Сохранить изменения</button>
                <button type='button'>Сменить пароль</button>
                <button type='button'>Удалить профиль</button>
                </div>
            </form>

            <div className={styles.accountInfoSect2}>
            <h3>Ваши сеансы</h3>

            <div className={styles.accountInfoSect2Content}>
                <p>desktop_windows</p>
               
            </div>
            </div>

            <div className={styles.accountInfoSect3}>
                <h3>Связанные аккаунты</h3>
                <div className={styles.accountInfoSect3Content}>
                    <img src={accountImg} alt="" />
                    <p>MTC</p>
                </div>
            </div>

        </div>
    )
}
