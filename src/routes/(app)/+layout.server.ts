import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
	const {
		data: { session }
	} = await locals.supabase.auth.getSession();

	const {
		data: { user }
	} = await locals.supabase.auth.getUser();

	// Redirect to login if not authenticated
	if (!session || !user) {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	}

	return {
		session,
		user
	};
};
