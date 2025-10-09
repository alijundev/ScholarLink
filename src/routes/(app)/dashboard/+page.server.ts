import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const {
		data: { session }
	} = await locals.supabase.auth.getSession();

	const {
		data: { user }
	} = await locals.supabase.auth.getUser();

	// Redirect to login if not authenticated
	if (!session || !user) {
		throw redirect(303, '/login');
	}

	return {
		session,
		user
	};
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		await locals.supabase.auth.signOut();
		throw redirect(303, '/');
	}
};
