const createClient=require('@supabase/supabase-js').createClient;
const dotenv= require('dotenv');

// Load environment variables
dotenv.config();

const supabase = createClient(
    process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
async function fetchData() {
    try {
        const { data, error } = await supabase.from('country_language').select('*');
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            console.log('Fetched data:', data);
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}
fetchData();
