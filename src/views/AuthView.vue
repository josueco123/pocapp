<template>
  <div class="limiter">

		<div class="container-login100" style="background-image: url('./assets/movie-theater.jpg');">
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
					Sing In
				</span>
				<form class="login100-form validate-form p-b-33 p-t-5" @submit.prevent="onSubmit">

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input v-model="loginForm.email" class="input100" type="email" placeholder="Email" required>
						<span class="focus-input100" data-placeholder="&#xe82a;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input v-model="loginForm.password" class="input100" type="password" placeholder="Password" required>
						<span class="focus-input100" data-placeholder="&#xe80f;"></span>
					</div>

					<div class="container-login100-form-btn m-t-32">
						<button class="login100-form-btn">
							Login
						</button>

					</div>

                    <div class="container-login100-form-btn m-t-32">
                       
                    </div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composable/useAuth'

export default {
	setup() {
		const router = useRouter()
    	const { loginUser } = useAuth()

		const loginForm = ref({
			email: '',
			password: '',
		})

		return {
            loginForm,
            onSubmit: async() => {
                const { ok } = await loginUser( loginForm.value )

                if ( ok ) router.push({ name: 'movies.list' })
                 
            }
        }
    }

}
</script>
<style scoped>
	@import '../assets/auth.css';
</style>