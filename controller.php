public function category()
{
    $data = DB::table('inv_category')->get();
    return response()->json($data);
}
public function newCat($cat)
{
    DB::table('inv_category')->insert([
        'category_name' => ucwords($cat)
    ]);

    $data = DB::table('inv_category')->get();
    return response()->json($data);
}
