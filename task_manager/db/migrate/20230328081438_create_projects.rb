class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.date :due_date, null: false
      t.references :user, null: false, foreign_key: true
      t.boolean :completed, null: false

      t.timestamps
    end
  end
end
