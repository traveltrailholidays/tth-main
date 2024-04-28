'use client';

import useAccountModal from '@/hooks/useAccountModal';
import Modal from '@/components/modal/Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';


const AccountModal = () => {

    const accountModal = useAccountModal();

    const registerModal = useRegisterModal();

    const loginModal = useLoginModal();

    const handleRegister = () => {
        accountModal.onClose();
        registerModal.onOpen();
    }

    const handleLogin = () => {
        accountModal.onClose();
        loginModal.onOpen();
    }
        
    const bodyContent = (
        <div
            className='flex w-full justify-around'
        >
            <div
                onClick={handleLogin}
                className='cursor-pointer'
            >
                Login
            </div>

            <div
                onClick={handleRegister}
                className='cursor-pointer'
            >
                Register
            </div>
        </div>
    )

  return (
    <Modal
        isOpen={accountModal.isOpen}
        title='Account'
        onClose={accountModal.onClose}
        body={bodyContent}
        actionLabel='continue'
    />
  )
}

export default AccountModal;