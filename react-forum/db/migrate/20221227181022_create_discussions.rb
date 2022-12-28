class CreateDiscussions < ActiveRecord::Migration[7.0]
  def change
    create_table :discussions do |t|
      t.string :title, null: false
      t.string :author, default: 'Anon'
      t.text :body, null: false
      t.string :image

      t.timestamps
    end
  end
end
